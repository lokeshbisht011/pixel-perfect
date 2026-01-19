import React from "react";
import { Button } from "../ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Save, Download } from "lucide-react";

const Settings = ({
  /* settings state */
  allowEdit,
  setAllowEdit,
  addToTodaysPixelArts,
  setAddToTodaysPixelArts,

  /* actions */
  onSave,
  onDownload,
  isSaving,
}) => {
  return (
    <div className="space-y-6">
      {/* Settings Section */}
      <div className="pixel-card-single bg-card p-4">
        <h3 className="font-bold mb-4 text-card-foreground">Settings</h3>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="allowEdit"
              checked={allowEdit}
              onCheckedChange={(checked) => setAllowEdit(!!checked)}
              className="border-2 border-primary data-[state=checked]:bg-primary"
            />
            <label
              htmlFor="allowEdit"
              className="text-sm font-mono cursor-pointer select-none text-card-foreground"
            >
              Allow others to edit
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox
              id="todaysPixelArts"
              checked={addToTodaysPixelArts}
              onCheckedChange={(checked) =>
                setAddToTodaysPixelArts(!!checked)
              }
              className="border-2 border-primary data-[state=checked]:bg-primary"
            />
            <label
              htmlFor="todaysPixelArts"
              className="text-sm font-mono cursor-pointer select-none text-card-foreground"
            >
              Add to Today's Pixel Arts
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

        <Button
          variant="pixel"
          className="w-full"
          onClick={onDownload}
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default Settings;
