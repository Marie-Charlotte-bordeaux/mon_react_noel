import { useParams, useSearchParams } from "react-router";

export default function UserPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  console.log("params", params);
  console.log("searchParams", searchParams);
  return (
  <div>user</div>
);
}