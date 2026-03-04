// test-email.ts
const WEB3FORMS_KEY = 'e0e9baf9-95bc-4cf5-a412-a58e3f751feb'; // Remplace par ta vraie clé

async function testEmail() {
    console.log('🚀 Test envoi email...\n');

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_KEY,
                from_name: 'Test Portfolio',
                email: 'test@test.com',
                subject: 'Test - Portfolio Claude',
                message: 'Ceci est un test du formulaire de contact.',
            }),
        });

        const result = await response.json();

        if (result.success) {
            console.log('✅ SUCCESS! Email envoyé.');
            console.log('📧 Vérifie ta boîte mail : claude.aboki@gmail.com');
        } else {
            console.log('❌ ERREUR:', result.message);
        }
    } catch (error) {
        console.log('❌ ERREUR:', error);
    }
}

testEmail();