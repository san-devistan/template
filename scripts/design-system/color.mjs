export function oklchToHsl(value) {
  const color = parseOklch(value)

  if (!color) {
    return value
  }

  const hueRadians = (color.hue * Math.PI) / 180
  const a = color.chroma * Math.cos(hueRadians)
  const b = color.chroma * Math.sin(hueRadians)

  const lPrime = color.lightness + 0.3963377774 * a + 0.2158037573 * b
  const mPrime = color.lightness - 0.1055613458 * a - 0.0638541728 * b
  const sPrime = color.lightness - 0.0894841775 * a - 1.291485548 * b

  const l = lPrime ** 3
  const m = mPrime ** 3
  const s = sPrime ** 3

  const rgb = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map(linearToSrgb)

  return rgbToHsl(rgb, color.alpha)
}

function parseOklch(value) {
  const match = value.match(
    /^oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(?:deg)?(?:\s*\/\s*([^)]+))?\s*\)$/
  )

  if (!match) {
    return null
  }

  const lightness = match[1].endsWith("%")
    ? Number.parseFloat(match[1]) / 100
    : Number.parseFloat(match[1])

  return {
    lightness,
    chroma: Number.parseFloat(match[2]),
    hue: Number.parseFloat(match[3]),
    alpha: match[4]?.trim(),
  }
}

function linearToSrgb(value) {
  const srgb =
    value <= 0.0031308
      ? 12.92 * value
      : 1.055 * Math.abs(value) ** (1 / 2.4) - 0.055

  return Math.min(1, Math.max(0, srgb))
}

function rgbToHsl(rgb, alpha) {
  const [red, green, blue] = rgb
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const lightness = (max + min) / 2
  const delta = max - min

  if (delta < 0.000001) {
    return withAlpha(`0 0% ${formatPercent(lightness)}`, alpha)
  }

  const saturation = delta / (1 - Math.abs(2 * lightness - 1))

  if (saturation < 0.000001) {
    return withAlpha(`0 0% ${formatPercent(lightness)}`, alpha)
  }

  const hue = getHue(rgb, max, delta)

  return withAlpha(
    `${formatNumber(hue)} ${formatPercent(saturation)} ${formatPercent(
      lightness
    )}`,
    alpha
  )
}

function getHue([red, green, blue], max, delta) {
  if (max === red) {
    return 60 * (((green - blue) / delta) % 6)
  }

  if (max === green) {
    return 60 * ((blue - red) / delta + 2)
  }

  return 60 * ((red - green) / delta + 4)
}

function withAlpha(channels, alpha) {
  return alpha ? `${channels} / ${alpha}` : channels
}

function formatPercent(value) {
  return `${formatNumber(value * 100)}%`
}

export function formatNumber(value) {
  const normalized = value < 0 ? value + 360 : value
  return Number.parseFloat(normalized.toFixed(3)).toString()
}
