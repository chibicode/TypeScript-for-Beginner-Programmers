// A React component to render a place label UI
function PlaceLabel({ place }: { place: Place }) {
  return (
    <span className="...">
      {placeToString(place)}
    </span>
  )
}
