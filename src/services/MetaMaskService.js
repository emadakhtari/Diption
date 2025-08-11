import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MetaMaskService = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Check if user is connected to MetaMask
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          setIsConnected(accounts.length > 0);
        })
        .catch((err) => {
          setErrorMessage("Please connect your browser to MetaMask.");
        });

      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts) => {
        setIsConnected(accounts.length > 0);
      });
    } else {
      setErrorMessage("MetaMask not detected. Please install MetaMask.");
    }
  }, []);

  const connectToMetaMask = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      toast.success("You have successfully connected to metamask wallet 👍", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      setErrorMessage("Failed to connect to MetaMask. Please try again.");
    }
  };

  const disconnectFromMetaMask = () => {
    setIsConnected(false);
    window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });
  };

  return {
    isConnected,
    errorMessage,
    connectToMetaMask,
    disconnectFromMetaMask,
  };
};

export default MetaMaskService;
