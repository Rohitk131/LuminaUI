import { Metadata } from 'next';

interface BaseMetadataProps {
  title?: string;
  description?: string;
}
export function baseMetadata({ title, description }: BaseMetadataProps): Metadata {
  return {
    title: `${title} Spectrum UI`,
    description: `Spectrum UI: ${description}`,
    authors: [{ name: 'Aruhant Jain' }, { url: 'https://arihant.us/', name: 'Arihant' }],
  };
}
