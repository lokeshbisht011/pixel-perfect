import React from "react";
import { Button } from "../ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Save, Download, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Settings = ({
  /* settings state */
  canRemix,
  setCanRemix,
  submitToTodaysFeed,
  setSubmitToTodaysFeed,
  makePrivate,
  setMakePrivate,

  /* actions */
  onSave,
  onDownload,
  isSaving,
}) => {
  const handleMakePrivateChange = (checked) => {
    const value = !!checked;
    setMakePrivate(value);

    if (value) {
      setCanRemix(false);
      setSubmitToTodaysFeed(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Settings Section */}
      <div className="md:pixel-card-single bg-card md:p-4 p-3">
        <h3 className="font-bold mb-4 text-card-foreground">Settings</h3>

        <div className="space-y-3">
          {/* Allow Remixing */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="canRemix"
              checked={canRemix}
              disabled={makePrivate}
              onCheckedChange={(checked) => setCanRemix(!!checked)}
              className="border-2 border-primary data-[state=checked]:bg-primary"
            />
            <label
              htmlFor="canRemix"
              className={`text-sm font-mono cursor-pointer select-none ${
                makePrivate ? "opacity-50" : ""
              }`}
            >
              Allow remixing
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <sup className="ml-1 inline-flex align-middle">
                      <Info className="h-3 w-3 text-muted-foreground hover:text-foreground transition" />
                    </sup>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs text-xs leading-relaxed">
                    Others can remix your pixel art and build on it.
                    <br />
                    <span className="opacity-80">
                      Your original will always be credited.
                    </span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </label>
          </div>

          {/* Submit to Today */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="submitToTodaysFeed"
              checked={submitToTodaysFeed}
              disabled={makePrivate}
              onCheckedChange={(checked) => setSubmitToTodaysFeed(!!checked)}
              className="border-2 border-primary data-[state=checked]:bg-primary"
            />
            <label
              htmlFor="submitToTodaysFeed"
              className={`text-sm font-mono cursor-pointer select-none ${
                makePrivate ? "opacity-50" : ""
              }`}
            >
              Submit to Today&apos;s Feed
            </label>
          </div>

          {/* Make Private */}
          <div className="flex items-center space-x-3 pt-2 border-t border-border">
            <Checkbox
              id="makePrivate"
              checked={makePrivate}
              onCheckedChange={handleMakePrivateChange}
              className="border-2 border-red-500 data-[state=checked]:bg-red-500"
            />
            <label
              htmlFor="makePrivate"
              className="text-sm font-mono cursor-pointer select-none text-red-500"
            >
              Make private (only visible to you)
            </label>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button
          variant="neon"
          className="w-full"
          onClick={onSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-5 w-5" />
              Save Pixel Art
            </>
          )}
        </Button>

        <Button variant="pixel" className="w-full" onClick={onDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default Settings;
