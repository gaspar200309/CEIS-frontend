import axios from 'axios';

const baseURL = "http://localhost:8000";

const api = axios.create({
  baseURL: baseURL,
  responseType: 'json',
  //withCredentials: true,
  timeout: 10000
});

export const loginUser = (data) => api.post('/user/login/', data);
export const registerUser = (data) => api.post('/user/register/', data);  

export const registerTeacher = (data) => api.post('/api/teachers', data)
export const getTeacher = () => api.get('/api/teachers')

export const getRoles = () => api.get('/api/roles')
export const getUsers = () => api.get('/api/users')
//export const addUser = (data) => api.post('/api/users', data)
export const addUser = (data) => api.post('/auth/register', data)
export const updateUser = (id, data) => api.put(`/api/users/${id}`, data)
export const deleteUser = (id) => api.delete(`/api/users/${id}`)

export const getCourses = () => api.get('/api/courses')

export const getAcademyObjetive = () => api.get('/api/academic')
export const getSGCAcademi = () => api.get('/api/sgc-objectives')
export const getFormulas  = () => api.get('/api/formulas')
export const addIndicator = (data) => api.post('/api/indicators', data);
export const getIndicator = () => api.get('/api/indicators')
export const assignCoordinatorToIndicator = (indicatorId, userId) => api.post(`/api/indicators/${indicatorId}/assign-coordinator`, { userId });
export const removeCoordinatorFromIndicator = (indicatorId, userId) => api.delete(`/api/indicators/${indicatorId}/remove-coordinator`, { data: { userId } });

export const registerCommunications = () => api.get('/api/indicators')
export const registerAttendance = () => api.get('/api/indicators')
export const registerTeacherNotes = () => api.get('/api/indicators')
export const registerCourseData = () => api.get('/api/indicators')
export const registerStudentNotes = () => api.get('/api/indicators')
export const getPeriods = () => api.get('/api/indicators')
export const registerYearlyCommunications = () => api.get('/api/indicators')
