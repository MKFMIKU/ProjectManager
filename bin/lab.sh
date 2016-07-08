PROJECT_PATH="/home/DormitoryD"
PROHECT_ID="index"

echo "--Auto Deploy for lab--"
cd $PROJECT_PATH
echo "pulling source code..."
git pull
pm2 restart $PROHECT_ID
echo "Finished."