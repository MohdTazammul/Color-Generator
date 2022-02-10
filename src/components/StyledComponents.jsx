import styled from "styled-components"

export const Div = styled.div`

& .container {
  text-align: center;
  display: flex;
  align-items:center;
  height: 100px;
  padding-left: 2rem;
}
& .container img {
  margin-bottom: 0;
  margin-right: 2rem;
}

& input {
  border-color: transparent;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  margin-left: 0%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
& .btn {
  background: black;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-color: transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  transition: all 0.5s ease;
  cursor: pointer;
}
&  .btn:hover{
  background: rgb(63, 63, 63);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
}
&  input.error {
  border: 2px solid maroon;
}

& .frequency{
  width:3.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  margin-right: 1em;
}

& .colors {
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
}
& .color {
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: none;
}
& .percent-value {
  margin-bottom: 0;
  color:hsl(209, 61%, 16%);;
}
& .color-value {
  color:hsl(209, 61%, 16%);;
  margin-bottom: 0;
}
& .color-light .color-value {
  color: white;
}
& .color-light .percent-value {
  color: white;
}

& .alert {
  visibility: visible;
  animation: fadeIn 1s;
            width: auto;
            font-weight: bold ;
            text-align: center;
            padding: 8px 10px;
            position: fixed;
            border-radius: 5px;
            z-index: 1;
            top: 130px;
            left: 50%;
            transform: translateX(-50%);
            color:#3C763D;
            background-color: #DFF0D8;
            border: 2px solid #3C763D;

}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}

`