import { useParams } from "react-router-dom";
export const CardPage = () => {
  const { resid } = useParams();
  return <div>CardPage + {resid} </div>;
};
