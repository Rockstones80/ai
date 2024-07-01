import axios from "axios";

const API_KEY = "408883c0623717a1c93d9fc74a0c2a72b58004f861a6cf23e276e8edac89b49879aa48d701aa3c955e6eb8669e1779dc8f8424f36ecb478d368ff511bc6b6a2dfd29e21b1a2b83280420f192c48d44fde1bb6b4c962ea3375615283039c8de0f6cd7a77b5cd78e6f0942b9eafec7ced6aba8ec791c9285659d3fb383078a36dc";

const axiosClient = axios.create({
    baseURL: "408883c0623717a1c93d9fc74a0c2a72b58004f861a6cf23e276e8edac89b49879aa48d701aa3c955e6eb8669e1779dc8f8424f36ecb478d368ff511bc6b6a2dfd29e21b1a2b83280420f192c48d44fde1bb6b4c962ea3375615283039c8de0f6cd7a77b5cd78e6f0942b9eafec7ced6aba8ec791c9285659d3fb383078a36dc" + "/api/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
});

const CreateNewResume = (data) => axiosClient.post('user-resumes', { data });

const GetUserResumes = (userEmail) => axiosClient.get(`user-resumes?filters[userEmail][$eq]=${userEmail}`);

const UpdateResumeDetail = (id, data) => axiosClient.put(`user-resumes/${id}`, { data });

const GetResumeById = (id) => axiosClient.get(`user-resumes/${id}?populate=*`);

const DeleteResumeById = (id) => axiosClient.delete(`user-resumes/${id}`);

export default {
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}