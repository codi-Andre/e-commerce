interface ColorPaletteProps {
  green?: boolean
  skyBlue?: boolean
  lightGreen?: boolean
  blue?: boolean
  pink?: boolean
  purple?: boolean
  orange?: boolean
}

export function ColorPalette({
  green,
  skyBlue,
  lightGreen,
  blue,
  pink,
  purple,
  orange
}: ColorPaletteProps) {
  return (
    <span className="flex gap-2">
      {green && (
        <span className="rounded-full bg-palette-green p-2">
          <span className="sr-only">green</span>
        </span>
      )}
      {skyBlue && (
        <span className="rounded-full bg-palette-skyBlue p-2">
          <span className="sr-only">skyBlue</span>
        </span>
      )}
      {lightGreen && (
        <span className="rounded-full bg-palette-lightGreen p-2">
          <span className="sr-only">lightGreen</span>
        </span>
      )}
      {blue && (
        <span className="rounded-full bg-palette-blue p-2">
          <span className="sr-only">blue</span>
        </span>
      )}
      {pink && (
        <span className="rounded-full bg-palette-pink p-2">
          <span className="sr-only">pink</span>
        </span>
      )}
      {purple && (
        <span className="rounded-full bg-palette-purple p-2">
          <span className="sr-only">purple</span>
        </span>
      )}
      {orange && (
        <span className="rounded-full bg-palette-orange p-2">
          <span className="sr-only">orange</span>
        </span>
      )}
    </span>
  )
}
