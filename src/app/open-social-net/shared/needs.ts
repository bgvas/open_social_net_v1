export class Needs {

    public needs = new Map<string, string>();

    public map(): Map<string, string> {
        this.needs.set('Ενδυση', 'Είδη Ενδυσης');
        this.needs.set('Υπόδηση', 'Είδη Υπόδησης');
        this.needs.set('Διατροφή', 'Είδη Διατροφής');
        this.needs.set('Στέγαση', 'Εξασφάλιση Στέγασης');
        this.needs.set('Θέρμανση', 'Εξασφάλιση Θέρμανσης');
        this.needs.set('Χρήματα', 'Χρηματική ενίσχυση');
        this.needs.set('Μετακίνηση', 'Μετακίνηση');
        this.needs.set('Περίθαλψη', 'Ιατρική Περίθαλψη');
        this.needs.set('Φάρμακα', 'Φάρμακα');

        return this.needs;
    }
}


