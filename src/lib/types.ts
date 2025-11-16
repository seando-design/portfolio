import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { PortableTextBlock } from '@portabletext/types';

export interface Project {
  title: string;
  slug: { current: string };
  projectType: string[];
  thumbnail: SanityImageSource;
}

export interface ProjectDetailed {
  title: string;
  slug: { current: string };
  projectType: string[];
  description: PortableTextBlock[];
  images: {
    asset: SanityImageSource;
    alt: string;
  }[];
  layout: string;
}

export interface ArchiveProject {
  title: string;
  media: {
    mediaType: string;
    image?: {
      asset: SanityImageSource;
    };
    video?: {
      asset: { playbackId: string };
    };
    thumbnail?: { asset: SanityImageSource };
  };
  sensitiveContent: {
    isSensitiveContent: boolean;
    warning: PortableTextBlock[];
  };
  layout: string;
}
