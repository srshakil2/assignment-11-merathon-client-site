import { DNA } from "react-loader-spinner";
const Loding = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-600">
      <DNA
        visible={true}
        height="300"
        width="500"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
export default Loding;
