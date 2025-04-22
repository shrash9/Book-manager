import { createAction,props } from "@ngrx/store";
import { Book } from "../book";

export const AddBook = createAction('[Book] Add Book' , props<Book>());
export const RemoveBook = createAction('[Book] Remove Book' , props<{bookId: string}>());