import DynamicGradients from "@/components/luminaui/dynamic-gradient";

const App = () => {
  const gradientColors = ["rgba(238,174,202,1)", "rgba(148,187,233,1)"];

  return (
    <div>
      <DynamicGradients gradientColors={gradientColors} />
    </div>
  );
};

export default App;
