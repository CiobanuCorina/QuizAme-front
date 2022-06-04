export default {
    namespaced: true,
    state: {
        isAuthorised: false,
        username: '',
        email: '',
        role: '',
        id: null
    },
    getters: {
        getIsAuthorised: (state) => state.isAuthorised,
        getUsername: (state) => state.username,
        getEmail: (state) => state.email,
        getRole: (state) => state.role,
        getId: (state) => state.id,
    },
    actions: {
        login(store, {username, email, role, id}) {
            store.commit('mutateUsername', username);
            store.commit('mutateEmail', email);
            store.commit('mutateRole', role);
            store.commit('mutateId', id);
            store.commit('mutateIsAuthorised', true);
        },
        logout(store) {
            store.commit('mutateUsername', null);
            store.commit('mutateEmail', null);
            store.commit('mutateRole', null);
            store.commit('mutateId', null);
            store.commit('mutateIsAuthorised', false);
        }
    },
    mutations: {
        mutateIsAuthorised(state, payload) {
            state.isAuthorised = payload;
        },
        mutateUsername(state, payload) {
            state.username = payload;
        },
        mutateEmail(state, payload) {
            state.email = payload;
        },
        mutateRole(state, payload) {
            state.role = payload;
        },
        mutateId(state, payload) {
            state.id = payload;
        }
    }
}