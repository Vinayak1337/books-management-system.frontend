import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../redux/Store';

export const useRTKSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useRTKDispatch = useDispatch<RootDispatch>;
