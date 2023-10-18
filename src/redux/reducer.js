import { combineReducers } from "redux";

const initMember = {
    members: [
        {
            name: "Julia",
            position: "President",
            pic: "member1.jpg"
        },
        {
            name: "David",
            position: "Vice President",
            pic: "member2.jpg"
        },
        {
            name: "Emily",
            position: "UI Designer",
            pic: "member3.jpg"
        },
        {
            name: "Paul",
            position: "Front-end Engineer",
            pic: "member4.jpg"
        },
        {
            name: "Sara",
            position: "Back-end Engineer",
            pic: "member5.jpg"
        },
        {
            name: "Michael",
            position: "Project Manager",
            pic: "member6.jpg"
        }
    ],
}


//초기 데이터를 state에 저장했다가 추구 action 객체가 전달되면
// 액션의 타입에 따라서 기존의 데이터(state)를 변경해서 리턴하는 함수
//디폴트 파라미터 
const memberReducer = (state = initMember, action) => {
    switch (action.type) {
        case "SET_MEMBERS":
            return { ...state, members: action.payload };
        // case "SET_COLORS" :

        default:
            return state;
    }
    // 상태값이 변화가 없습니다
    //왜냐하면 member를 추가하는것이 아니라, state값을 가지고와서 사용하는 목적이라서 지금예제에서는 상태값의 변화는 없습니다
}

const youtubeReducer = (state = { youtube: [] }, action) => {
    switch (action.type) {
        case "SET_YOUTUBE":
            return { ...state, youtube: action.payload }
        default:
            return state;
    }
}



const reducers = combineReducers({ memberReducer, youtubeReducer });

export default reducers

/*
라이브러리

useReducer는 리액트의 내장된 hook중 하나로, 리액트 어플리케이션 상태관리를 위한 방법입니다

반면 Redux는 별도의 라이브러리로 리액트와 독립적으로 사용이 가능하며
어플리케이션의 전역상태관리를 위한 고급 도구입니다

범위

useReducer는 일반적으로 컴포넌트 내부에서 상태를 관리합니다
한 컴포넌트 내에서만 상태를 공유하고 업데이트하고~ 이렇게 지역적입니다

반면에 Redux는 여러 컴포넌트에서 전역 상태를 공유하고~ 업데이트하고~
이렇게 전역적입니다
*/