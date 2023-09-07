import { appDispatch,rootState } from "./store";
import { useDispatch, useSelector } from "react-redux/es/exports";

export const useAppDispatch = (data )=>useDispatch(data)
export const useAppSelector = useSelector