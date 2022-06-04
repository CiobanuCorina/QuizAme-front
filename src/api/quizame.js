import api from './api'

export const fetchQuestionnaires = () => api.get('questionnaires')
export const fetchBeginnerQuiz = (id) => api.get('beginner', {params: {id}})
export const fetchIntermediateQuiz = (id) => api.get('intermediate', {params: {id}})
export const fetchExpertQuiz = (id) => api.get('expert', {params: {id}})

export const register = (username, email, password) => api.post('register', {username, email, password})
export const login = (username, password) => api.post('login', {username, password})

export const postQuizScore = (questionnaireId, score) => api.post('score', {questionnaireId, score})