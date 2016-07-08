PROJECT_PATH="/home/wwwroot/Myindex"
PROHECT_ID="www"

echo "--Auto Deploy for Myindex--"
cd $PROJECT_PATH
echo "pulling source code..."
git pull
pm2 restart $PROHECT_ID
echo "Finished."