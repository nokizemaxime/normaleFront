import { Motivation } from "./MotivationModel";

export class Abonne{
    public id?: number;
    public nom?: string;
    public prenom?: string;
    public age?: number;
    public id_motivation?: Motivation;
    public sexe?: string;
    public profession?: string;
    public rue?: string;
    public code_postal?: string;
    public ville?: string;
    public pays?: string;
    public telephone?: string;
    public email?: string;

    public constructor(){

    }
}