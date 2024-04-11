import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1.Load authenticated user

  const { isLoading, isAuthenticated } = useUser();

  //2. If there is No authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if there is a user , render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
