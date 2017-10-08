import { Page } from './page';

export class Chapter {
  id: number;
  title: string;
  chapNumber: number;
  bookId: number;
  pages: Page[];
  previousChapterId: number;
  nextChapterId: number;
}
