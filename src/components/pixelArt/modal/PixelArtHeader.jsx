import { formatDistanceToNow } from "date-fns";
import BoringAvatar from "boring-avatars";
import Link from "next/link";

export default function PixelArtHeader({ pixelArt }) {
  const profile = pixelArt.profile;

  return (
    <div className="border-b">
      {/* Header row */}
      <div className="p-4 flex gap-3 items-center">
        {profile.avatarConfig && (
          <Link href={`/${profile.username}`}>
            <BoringAvatar
              size={32}
              name={profile.avatarConfig.seed}
              variant={profile.avatarConfig.variant}
              colors={profile.avatarConfig.colors}
            />
          </Link>
        )}

        <div className="flex flex-col">
          <Link href={`/${profile.username}`} className="text-sm font-medium">
            {profile.username}
          </Link>

          <span className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(pixelArt.createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>
      </div>

      {/* Title */}
      {pixelArt.title && (
        <div className="px-4 pb-3">
          <h2 className="text-lg font-semibold leading-tight">
            {pixelArt.title}
          </h2>
        </div>
      )}
    </div>
  );
}
