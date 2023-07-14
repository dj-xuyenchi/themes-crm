declare const mapdata: {
    mapOneStyles: ({
        featureType: string;
        elementType: string;
        stylers: ({
            color: string;
            lightness?: undefined;
            weight?: undefined;
        } | {
            lightness: number;
            color?: undefined;
            weight?: undefined;
        } | {
            weight: number;
            color?: undefined;
            lightness?: undefined;
        })[];
    } | {
        elementType: string;
        stylers: ({
            visibility: string;
            color?: undefined;
            lightness?: undefined;
        } | {
            color: string;
            visibility?: undefined;
            lightness?: undefined;
        } | {
            lightness: number;
            visibility?: undefined;
            color?: undefined;
        })[];
        featureType?: undefined;
    } | {
        elementType: string;
        stylers: ({
            saturation: number;
            color?: undefined;
            lightness?: undefined;
        } | {
            color: string;
            saturation?: undefined;
            lightness?: undefined;
        } | {
            lightness: number;
            saturation?: undefined;
            color?: undefined;
        })[];
        featureType?: undefined;
    })[];
    mapTwoStyles: ({
        featureType: string;
        elementType: string;
        stylers: ({
            saturation: number;
            color?: undefined;
            lightness?: undefined;
        } | {
            color: string;
            saturation?: undefined;
            lightness?: undefined;
        } | {
            lightness: number;
            saturation?: undefined;
            color?: undefined;
        })[];
    } | {
        featureType: string;
        elementType: string;
        stylers: ({
            visibility: string;
            color?: undefined;
            lightness?: undefined;
        } | {
            color: string;
            visibility?: undefined;
            lightness?: undefined;
        } | {
            lightness: number;
            visibility?: undefined;
            color?: undefined;
        })[];
    } | {
        featureType: string;
        elementType: string;
        stylers: ({
            color: string;
            lightness?: undefined;
            weight?: undefined;
        } | {
            lightness: number;
            color?: undefined;
            weight?: undefined;
        } | {
            weight: number;
            color?: undefined;
            lightness?: undefined;
        })[];
    })[];
    mapThreeStyles: ({
        featureType: string;
        elementType: string;
        stylers: ({
            visibility: string;
            color?: undefined;
            weight?: undefined;
            gamma?: undefined;
        } | {
            color: string;
            visibility?: undefined;
            weight?: undefined;
            gamma?: undefined;
        } | {
            weight: number;
            visibility?: undefined;
            color?: undefined;
            gamma?: undefined;
        } | {
            gamma: string;
            visibility?: undefined;
            color?: undefined;
            weight?: undefined;
        })[];
    } | {
        featureType: string;
        elementType: string;
        stylers: ({
            color: any;
            gamma?: undefined;
            weight?: undefined;
        } | {
            gamma: string;
            color?: undefined;
            weight?: undefined;
        } | {
            weight: string;
            color?: undefined;
            gamma?: undefined;
        })[];
    } | {
        featureType: string;
        elementType: string;
        stylers: ({
            color: string;
            lightness?: undefined;
        } | {
            lightness: string;
            color?: undefined;
        })[];
    })[];
    mapStyleDark: ({
        featureType: string;
        elementType: string;
        stylers: ({
            visibility: string;
            color?: undefined;
            weight?: undefined;
            gamma?: undefined;
        } | {
            color: string;
            visibility?: undefined;
            weight?: undefined;
            gamma?: undefined;
        } | {
            weight: number;
            visibility?: undefined;
            color?: undefined;
            gamma?: undefined;
        } | {
            gamma: string;
            visibility?: undefined;
            color?: undefined;
            weight?: undefined;
        })[];
    } | {
        featureType: string;
        elementType: string;
        stylers: ({
            color: string;
            gamma?: undefined;
            weight?: undefined;
        } | {
            gamma: string;
            color?: undefined;
            weight?: undefined;
        } | {
            weight: string;
            color?: undefined;
            gamma?: undefined;
        })[];
    } | {
        featureType: string;
        elementType: string;
        stylers: ({
            color: string;
            lightness?: undefined;
        } | {
            lightness: string;
            color?: undefined;
        })[];
    })[];
    styles: {
        width: string;
        height: string;
        top: number;
        left: number;
    };
};
export default mapdata;
