// import { AppBar } from './AppBar/AppBar';
// import { TaskForm } from './TaskForm/TaskForm';
// import { TaskList } from './TaskList/TaskList';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from 'study/pages/LoginPage';
import { Layout } from './Layout/Layout';

export const AppStudy = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Route>
    </Routes>
    // <Layout>
    //   <AppBar />
    //   <TaskForm />
    //   <TaskList />
    // </Layout>
  );
};
