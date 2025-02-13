import { Metadata } from 'next';

interface BaseMetadataProps {
  title?: string;
  description?: string;
}
export function baseMetadata({ title, description }: BaseMetadataProps): Metadata {
  return {
    title: `${title} LuminaUI`,
    description: `LuminaUI: ${description}`,
    authors: [{ name: 'Aruhant Jain' }, { url: 'https://rohitk.me/', name: 'Rohit' }],
  };
}
