export const Grid = ({ children, style }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: `
            "navigation navigation navigation"
            "sidenav content content"
            "sidenav content content"
            "sidenav content content"
        `,
        height: "100vh",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
