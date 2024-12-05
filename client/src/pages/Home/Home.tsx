import PageHeader from "../../components/PageHeader";
import StudentListItem from "../../components/StudentListItem";
import { useApiGetStudents } from "../../hooks/api";

const Home = () => {
  const { data, isLoading } = useApiGetStudents();
  console.log(data, isLoading);
  return (
    <div className="mt-2">
      <PageHeader title="Öğrenci Listesi" />

      {data &&
        data?.map((studentItem: Student) => (
          <StudentListItem key={studentItem.id} student={studentItem} />
        ))}
    </div>
  );
};

export default Home;
