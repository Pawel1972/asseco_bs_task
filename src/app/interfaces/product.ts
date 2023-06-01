export interface Product
{
    productId: number;
    productName: string;
    productCode: number;
    operatingSystem: string;
    description: string;
    basePrice: number;
    prgCode: number;
    lastVersion: string;
    lastReleaseDate: Date;
    maxNumberOfUsers: number;
    variants: Variant[];
    versions: Version[];
    packets: Packet[];
    agreementCode: string;
    agreementUrl: string;
    agreementDesc: string;
    allowModify: boolean;
    productNameShortcut: string;
    productNameDescription: string;
    productUrl: string;
    packetDescription: string;
    variantDescription: string;
    eduLicenseDescription: string;
    requiredProducts: Requiredproduct[];
}

export interface Variant
{
    variantId: number;
    productId: number;
    variantName: string;
    variantCode: number;
    orderWWW: number;
    maxNumberOfUsers: number;
}

export interface Version
{
    versionId: number;
    productId: number;
    versionNumber: string;
    versionCode: number;
    releaseDate: Date;
    number: number;
    compareNumber: number;
}

export interface Packet
{
    packetId: number;
    productId: number;
    packetName: string;
    packetCode: number;
    orderWWW: number;
}

export interface Requiredproduct
{
    requiredProductId: number;
    requiredProductName: string;
}