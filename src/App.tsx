import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Tests from "./pages/Tests";
import AddTest from "./pages/AddTest";
import AddTask from "./pages/AddTask";
import TestDetail from "./pages/TestDetail";
import EditTest from "./pages/EditTest";
import Reports from "./pages/Reports";
import Payments from "./pages/Payments";
import Pricing from "./pages/Pricing";
import StudentProfile from "./pages/StudentProfile";
import TeacherProfile from "./pages/TeacherProfile";
import StudentProfileView from "./pages/StudentProfileView";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/students" element={<Layout><Students /></Layout>} />
            <Route path="/students/:id" element={<Layout><StudentProfile /></Layout>} />
            <Route path="/courses" element={<Layout><Courses /></Layout>} />
            <Route path="/tests" element={<Layout><Tests /></Layout>} />
            <Route path="/tests/add" element={<Layout><AddTest /></Layout>} />
            <Route path="/tests/:id" element={<Layout><TestDetail /></Layout>} />
            <Route path="/tests/:id/edit" element={<Layout><EditTest /></Layout>} />
            <Route path="/tasks/add" element={<Layout><AddTask /></Layout>} />
            <Route path="/reports" element={<Layout><Reports /></Layout>} />
            <Route path="/payments" element={<Layout><Payments /></Layout>} />
            <Route path="/profile/teacher" element={<Layout><TeacherProfile /></Layout>} />
            <Route path="/profile/student" element={<Layout><StudentProfileView /></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;