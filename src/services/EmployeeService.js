
import axios from "axios";
const REST_API_BASE_URL = import.meta.env.VITE_API_URL || "http://${ec2your-ec2-ip}/api";

console.log("API Base URL:", REST_API_BASE_URL);  // 🔍 Debug log

export const listEmployees = () => {
    console.log("GET Request URL:", `${REST_API_BASE_URL}/employees`);  // 🔍 Debug log
    return axios.get(`${REST_API_BASE_URL}/employees`);
};

export const createEmployee = (employee) => {
    console.log("POST Request URL:", `${REST_API_BASE_URL}/employees`);
    return axios.post(`${REST_API_BASE_URL}/employees`, employee);
};

export const getEmployee = (employeeId) => {
    console.log("GET Request URL:", `${REST_API_BASE_URL}/employees/${employeeId}`);
    return axios.get(`${REST_API_BASE_URL}/employees/${employeeId}`);
};

export const updateEmployee = (employeeId, employee) => {
    console.log("PUT Request URL:", `${REST_API_BASE_URL}/employees/${employeeId}`);
    return axios.put(`${REST_API_BASE_URL}/employees/${employeeId}`, employee);
};

export const deleteEmployee = (employeeId) => {
    console.log("DELETE Request URL:", `${REST_API_BASE_URL}/employees/${employeeId}`);
    return axios.delete(`${REST_API_BASE_URL}/employees/${employeeId}`);
};
