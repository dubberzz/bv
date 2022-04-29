import {collection, getDocs, addDoc, doc, deleteDoc, getDoc} from "firebase/firestore";
import {database} from "../config/firebaseConfig";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const productCollectionRef = collection(database,"product");


export const createProductService = async (product) => {
    return await addDoc(productCollectionRef , product ).then(response => {
        console.log('response',response,'id',response?.id)
        if (response.id) {
            return response.id;
        }
        else
        {
           return '';
        }

    }).catch(error =>console.log(error));
}

export const fetchProductService = async () => {
    return await getDocs(productCollectionRef).then(response => {
        return response.docs.map(doc => {
            return {...doc.data() , id: doc.id}
        })
    }).catch(error => console.log(error));

}

export const deleteProductService = async (id) =>{
    const productDoc=doc(database , "product" , id);
    await deleteDoc(productDoc);
}

export const uploadImagesFirebase = async (image, idDoc) => {
    const storage = getStorage();
    const storageRef = ref(storage, `/images/${idDoc}`);
    const metadata = {
        contentType: 'image/*',public:true,
    };
    const files = uploadBytes(storageRef, image ,metadata).then((snapshot) => {
        console.log('Uploaded an array!');
    }).catch(error => console.log(error))
    console.log(files)
}
export const fetchProductId = async (id) =>{
    const productDoc=doc(productCollectionRef , id);
    const docSnap = await getDoc(productDoc);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

}
