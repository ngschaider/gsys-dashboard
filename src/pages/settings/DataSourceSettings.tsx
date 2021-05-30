

import { useForm } from "../../utils/hooks"
import { getConfig } from "../../data/DataManager";
import { DataSourceConfig } from "../../data/DataSource";
import { ChangeEvent, useState } from "react";
import API, { LoginInput } from "../../API";
import * as DataManager from "../../data/DataManager";

const DataSourceSettings = () => {
    const initialValues = getConfig();

    const {values, onChange, onSubmit, onSelectChange, setValue} = useForm<DataSourceConfig>(initialValues, values => {
        DataManager.setConfig(values);
    });

    const {values: loginValues, onChange: onLoginChange} = useForm<LoginInput>({
        usernameOrEmail: "",
        password: "",
    });

    const generateLoginToken = () => {
        if(!values.address) {
            alert("Zuerst Adresse eingeben!");
            return;
        }

        API.baseUrl = values.address;

        API.login(loginValues).then(res => {
            if(res.type === "success" && res.token) {
                setValue("token", res.token);
            }
        });
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <span>Treiber: </span><br />
                <select name="driver" onChange={onSelectChange} value={values.driver} >
                    <option value="localStorage">Local Storage</option>
                    <option value="server">GSYS API Server</option>
                </select>
                <br />
                <br />
                <div className={values.driver === "localStorage" ? "" : "hidden"}>
                    <span>Speichern unter Schlüssel</span>
                    <input type="text" name="storageKey" onChange={onChange} value={values.storageKey} />
                </div>
                <div className={values.driver === "server" ? "" : "hidden"}>
                    <div>
                        <span>URL</span>
                        <br />
                        <input type="text" name="address" onChange={onChange} autoComplete="off" value={values.address} />
                        <br />
                        <br />
                        <span>Login-Token</span>
                        <br />
                        <input type="text" name="username" onChange={onChange} autoComplete="off" value={values.token} />
                        <br />
                        <br />
                    </div>
                    <input type="submit" value="Speichern" />

                    <div style={{width: "40%", marginTop: "50px"}}>
                        <h2>Login-Token generieren</h2>
                        <span>Username oder E-Mail Adresse</span>
                        <br />
                        <input type="text" name="usernameOrEmail" onChange={onLoginChange} autoComplete="off" value={loginValues.usernameOrEmail} />
                        <br />
                        <br />
                        <span>Passwort</span>
                        <br />
                        <input type="password" name="password" onChange={onLoginChange} value={loginValues.password} />
                        <br />
                        <br />
                        <button onClick={generateLoginToken}>Generieren</button>
                        <br />
                    </div>
                </div>
            </form>
        </>
    );
};
export default DataSourceSettings;