import { Skeleton } from "@/components/ui/skeleton";

export default function ModalSkeleton() {
  return (
    <div className="flex flex-col md:flex-row h-[90vh] md:h-[600px]">
      <div className="flex-1 bg-muted flex items-center justify-center">
        <Skeleton className="h-[60%] w-[60%] rounded-md" />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex gap-3">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-2 w-20" />
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>

        <div className="p-4 border-t flex gap-3">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}
