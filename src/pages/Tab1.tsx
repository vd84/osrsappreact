import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import './Tab1.css';


const Tab1: React.FC = () => {

  let state;



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className="welcome-card">
                    <IonCardHeader>
                        <IonCardSubtitle>Login</IonCardSubtitle>
                        <IonCardTitle>Welcome to OsrsApp</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>
                            You can log in on this page
                        </p>
                    </IonCardContent>
                </IonCard>


                <IonInput value={state}>Please type your login on osrs</IonInput>


                <button>Login</button>


            </IonContent>
        </IonPage>
    );
};

export default Tab1;
