import ImageSearch from "./ImageSearch/ImageSearch";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        color: 'yellow'
      }}
    >
      <ImageSearch />
    </div>
  );
};