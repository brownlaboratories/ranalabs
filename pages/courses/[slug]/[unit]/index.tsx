import CourseFlashcard from "@/components/course-flashcard";
import CourseLayout from "@/components/course-layout";
import { CourseProgress } from "@/components/course-progress";
import { MCQ } from "@/components/quiz-forms";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { H3, Muted } from "@/components/ui/typography";
import { BarChart, Plus } from "lucide-react";

function CoursePage() {
  return (
    <CourseLayout>
      <H3>Unit 2. Differentiation I</H3>
      <Muted>Equiv. AP Unit II: Definition and fundamental properties</Muted>
      <div className="flex items-center gap-2 mt-4">
        <Button variant="outline">1-by-1 view</Button>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          New card
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">
              <BarChart className="h-4 w-4 mr-2" />
              Show stats
            </Button>
          </PopoverTrigger>
          <PopoverContent sideOffset={8}>
            <CourseProgress />
          </PopoverContent>
        </Popover>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Quiz me</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Unit 2 Quiz</DialogTitle>
              <DialogDescription>
                <MCQ />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-4">
        <CourseFlashcard />
      </div>
    </CourseLayout>
  );
}

export default CoursePage;