export const authReducer = 5;

type User = {
    name: string
}

interface AuthState {
    loading: boolean;
    error: string | null
    user: User | null
}

const initialState = {
    loading: false,
    error: null,
    user: null
}

export const reducer = (state: AuthState = initialState, action: any): AuthState => {
    switch (action.type) {
        case '1':
            return { loading: false, error: null, user: null }
    }

}