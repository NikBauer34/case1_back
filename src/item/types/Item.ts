import { Book } from "src/book/book.model"
import { CD } from "src/cd/cd.model"
import { Textbook } from "src/textbook/textbook.model"

export type IItem = CD | Textbook | Book
export type ItemType = 'CD' | 'Textbook' | 'Book'