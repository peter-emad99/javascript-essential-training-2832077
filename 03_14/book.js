class Book {
  constructor(
    title, //string
    NumOfPages, //number
    category, //string
    language, //string
    author, //string
    readStatus, //boolean
    CurrentPage, //number
    NotesPGNum, //number[]
    NewWords //string[]
  ) {
    this.title = title;
    this.NumOfPages = NumOfPages;
    this.category = category;
    this.language = language;
    this.author = author;
    this.readStatus = readStatus;
    this.CurrentPage = CurrentPage;
    this.NotesPGNum = NotesPGNum;
    this.NewWords = NewWords;
  }
  ChangepPgNUm(NewPgNum) {
    this.CurrentPage = NewPgNum;
  }
  changereadStatus(NewReadStatus) {
    this.readStatus = NewReadStatus;
  }
  AddnotesPgNUm(NewNotesPgNum) {
    this.NotesPGNum = push(NewNotesPgNum);
  }
  AddNewWord(AddedWrod) {
    this.NewWords = push(AddedWrod);
  }
}
export default Book;
