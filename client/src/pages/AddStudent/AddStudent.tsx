import PageHeader from "../../components/PageHeader";

type Props = {};

const AddStudent = (props: Props) => {
  function handleSubmit() {
    console.log("hello");
  }
  return (
    <div className="mt-2">
      <PageHeader title="Öğrenci Ekle" />
      <div className="mx-auto w-1/3 p-5 border border-slate-800">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label htmlFor="firstName">Ad</label>
              <input
                className="w-full py-2 border border-gray-400 overflow-hidden"
                type="text"
                name="firstName"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Soyad</label>
              <input
                className="w-full py-2 border border-gray-400 overflow-hidden"
                type="text"
                name="lastName"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label htmlFor="department">Departman</label>
              <input
                className="w-full py-2 border border-gray-400 overflow-hidden"
                type="text"
                name="department"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="w-full py-2 border border-gray-400 overflow-hidden"
                type="text"
                name="email"
              />
            </div>
          </div>
          <button>Ekle</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
