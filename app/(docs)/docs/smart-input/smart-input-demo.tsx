import InputWithValidation from "@/components/luminaui/smart-input";

const SmartInputPreview = () => {
  return (
    <div className="flex flex-col space-y-6 p-6 items-center justify-center">
      <h1 className="text-white text-2xl font-bold">Validation Input Demo</h1>
      <InputWithValidation />
    </div>
  );
};

export default SmartInputPreview;
