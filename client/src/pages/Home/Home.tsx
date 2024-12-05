import { useApiGetStudents } from "../../hooks/api";

type Props = {};

const Home = (props: Props) => {
  const { data, isLoading } = useApiGetStudents();
  console.log(data, isLoading);
  return <div>Home</div>;
};

export default Home;
