import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

function CertSheet({  open, setOpen, selectedRow }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">
            Resource Details
          </SheetTitle>
          <p className="text-sm text-muted-foreground">
            Detailed metadata for selected item
          </p>
        </SheetHeader>

        {selectedRow ? (
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase mb-1">
                Path
              </h4>
              <div className="text-sm bg-muted rounded-md p-3 break-all">
                {selectedRow.name}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase mb-1">
                Tags
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {selectedRow.tags?.map((tag) => (
                  <div
                    key={tag.Key}
                    className="flex justify-between items-center bg-muted p-3 rounded-md text-sm"
                  >
                    <span className="font-medium text-muted-foreground">
                      {tag.Key}
                    </span>
                    <span className="text-foreground">{tag.Value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 text-muted-foreground text-sm">
            No row selected.
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CertSheet;
