import { Loader2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { useStore } from "@nanostores/react";
import { isDonationModelOpen } from "@/store";

export function DonationDialog() {
  const [loading, setLoading] = useState(true);
  const $isModalOpen = useStore(isDonationModelOpen);

  const handleOpenChange = (isOpen: boolean) => {
    isDonationModelOpen.set(isOpen);
    if (!isOpen) {
      setLoading(true);
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange} open={$isModalOpen}>
      <DialogContent className="sm:max-w-[90%] w-[640px] h-[90dvh]">
        <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
          <section className="place-self-center">
            {loading ? <Loader2 className="animate-spin mx-auto" /> : <></>}
          </section>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf4WVN87xseZMfrucxOOh__zTXQhYhDuCBNyMwXuAB1fgyRrQ/viewform?embedded=true"
            className="w-full h-full"
            width="640"
            height="1667"
            onLoad={() => setLoading(false)}
          >
            Loading...
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
