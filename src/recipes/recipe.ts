export type Recipe = {
    name: Text;
    ingredients: IngredientVariant[];
    steps: Step[];
    sizes: Size[];
}

export type IngredientVariant = {
    name: Text;
    flour: number;
    salt: number;
    water: number;
    yeast: number;
}

export type Step = {
    name: Text;
    video: YouTubeReference;
}

export type YouTubeReference = {
    link: string;
    second: number;
}

export type Size = {
    name: Text;
    gram: number;
    diameterInCm: number;
}

export type Text = {
    en: string;
    de?: string;
    nl?: string;
}