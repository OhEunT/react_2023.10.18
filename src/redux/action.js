/*
1. 액션을 생성합니다
액션이란 상태를 변경하도록 요청하는 객체입니다
*/

export const setMembers = (member) => {
    return {
        type: "SET_MEMBERS",
        payload: member
    }
}

export const setYoutube = (data) => {
    return {
        type: "SET_YOUTUBE",
        payload: data,
    }
}



/*
리덕스를 사용하기 위해서 필요한 내용

액션 :
어플리케이션에서 어떤 일이 일어나야 하는지를 나타내는 객체로써
주로사용자 상호작용, API호출, 타이머 등으로 인한 이벤트등이 있습니다
예 ) 사용자가 로그인 버튼을 클릭하는 액션이 있다
또는 서버에서 데이터를 성공적으로 받았다 이런 이벤트등의 액션으로 표현될 수 있습니다
액션은 주로 타입(type)과 그와 필요한 데이터를 포함시킨 객체입니다


리듀서 : 리듀서는 현재 상태와 액션을 받아서 새로운 상태를 반환합니다
중요))))) 무조건 순수함수입니다
예) 로그인 액션을 처리해서 로그인 상태를 변경해야합니다
로그인 액션이 있으면 리듀서는 로그인 이전 상태를 로그인 이후의 상태로 바꿔주는것
순수함수란? 동일한 값을 넣으면 언제나 동일한 결과를 보장하는 함수를 의미합니다
또한 외부에도 독립적이며 따라서 외부상태에 의존하지 않아서
동일한 값과 동일한 결과를 보장할 수 있는 함수
=> 순수함수인 리듀서의 장점 
디버깅이 쉽다, 버그가 일어났을경우 찾는 경로가 정해져있어서 금방 찾을 수 있다

스토어 : 애플리케이션 상태(데이터)를 저장하고 관리하는 객체입니다
스토어는 액션과 리듀서를 연결하고 따라서 상태를 관리하는 객체입니다
스토어에 데이터를 저장하면, 동일한 조건으로 같은 어플리케이션 안에서
데이터 접근이 용이합니다







*/